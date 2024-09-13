import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {},
  },
  reducers: {
    addTopic: (state, action) => {
      const { name, icon } = action.payload;
      const id = uuidv4();
      state.topics[id] = {
        id: id,
        name: name,
        icon: icon,
        quizIds: [],
      };
    },
  },
});

export const selectTopics = (state) => state.topics.topics;
export default topicsSlice.reducer;

// {
//     topics: {
//       topics: {
//         '123': {
//           id: '123',
//           name: 'example topic',
//           icon: 'icon url',
//           quizIds: ['456']
//         }
//       }
//     },
//     quizzes: {
//       quizzes: {
//         '456': {
//           id: '456',
//           topicId: '123',
//           name: 'quiz for example topic',
//           cardIds: ['789', '101', '102']
//         }
//       }
//     },
//     cards: {
//       cards: {
//         '789': {
//           id: '789',
//           front: 'front text',
//           back: 'back text'
//         },
//         '101': {
//           id: '101',
//           front: 'front text',
//           back: 'back text'
//         },
//         '102': {
//           id: '102',
//           front: 'front text',
//           back: 'back text'
//         },
//       }
//     }
//   }
