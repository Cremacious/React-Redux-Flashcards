import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {},
    },
    reducers: {
        addCard: (state, action) => {
            const { id, front, back } = action.payload;
            state.cards[id] = {
                id: id,
                front: front,
                back: back,
            };
        }
    }
});

export const { addCard } = cardSlice.actions;
export const selectCardById = (state, id) => state.cards.cards[id];
export default cardSlice.reducer;


// Has an addCard action. This action will receive a payload of the form { id: '123', front: 'front of card', back: 'back of card'}.
// Has a selector that returns a card with the given id.
// Is added to the store.