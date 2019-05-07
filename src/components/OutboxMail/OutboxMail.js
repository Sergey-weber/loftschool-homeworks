// Он должен показывать выбранное письмо на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

import React from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail';

// Этот компонент должен использовать компонент Mail для отображения данных.

const OutboxMail = ({
                        match: {
                            params: { id }
                        },
                        data
                    }) => {
    const mail = data.outbox.find(mail => mail.id === id);

    return <Mail {...mail} />;
};

export default withData(OutboxMail);