import { RootState } from './../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NotificationSlice {
  showNotification: boolean;
  header: string;
  message: string;
  notificationTypes: {
    sendSuccess: notificationContent;
    suggestion: notificationContent;
    sendError: notificationContent;
  };
}

type notificationContent = {
  header: string;
  message: string;
};

const initialState: NotificationSlice = {
  showNotification: false,
  header: '',
  message: '',
  notificationTypes: {
    sendSuccess: {
      header: 'Заявка отправлена',
      message: 'Ваша заявка была отправлена к нам. В скором времени вам перезввонит наш сотрудник.',
    },
    suggestion: {
      header: 'Уникальное предложение',
      message: 'Для новых клиентов у нас действует скидка в 30% на первые 3 месяца.',
    },
    sendError: {
      header: 'Ошибка отправки',
      message:
        'Что-то пошло не так и ваша заявка не была отправлена. Пожалуйста попробуйте повторить отправку.',
    },
  },
};

const notificationCardSlice = createSlice({
  name: 'notificationCard',
  initialState,
  reducers: {
    setShowNotification(state, action: PayloadAction<notificationContent>) {
      state.header = action.payload.header;
      state.message = action.payload.message;
      state.showNotification = true;
    },
    hideNotification(state) {
      state.showNotification = false;
    },
  },
});

export const noticeSelector = (state: RootState) => state.notificationCardSlice;

export const { setShowNotification, hideNotification } = notificationCardSlice.actions;
export default notificationCardSlice.reducer;
