import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Pizza, SearchPizzaParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
    'pizza/fetchPizzasStatus',
    async (params) => {
        const { sort, order, category, search, currentPage } = params;
        const { data } = await axios.get<Pizza[]>(`https://6293ec25089f87a57ac77f49.mockapi.io/items`, {
            params: pickBy(
                {
                    page: currentPage,
                    limit: 4,
                    category: category,
                    sortBy: sort,
                    order,
                    search,
                },
                identity,
            ),
        });

        return data;
    },
);
