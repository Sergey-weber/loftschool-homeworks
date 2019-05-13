import {CREATE_NEW_ORDER} from '../modules/clients';
import {MOVE_ORDER_NEXT, MOVE_ORDER_BACK} from '../actions/moveOrder';
import {ADD_INGREDIENT} from '../actions/ingredients';

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер.


export default (state = [], action) => {
    const { type, payload } = action;

    let currentOrder = null;
    let index = null;

    switch (type) {
        case CREATE_NEW_ORDER:
            return [
                ...state,
                {
                    id: payload.id,
                    recipe: [...payload.recipe],
                    ingredients: [],
                    position: 'clients'
                }
            ];
        case MOVE_ORDER_NEXT:
            return state.map(order => {
                if (order.id === action.payload) {
                    switch (order.position) {
                        case 'clients':
                            return { ...order, position: 'conveyor_1' };
                        case 'conveyor_1':
                            return { ...order, position: 'conveyor_2' };
                        case 'conveyor_2':
                            return { ...order, position: 'conveyor_3' };
                        case 'conveyor_3':
                            return { ...order, position: 'conveyor_4' };
                        case 'conveyor_4':
                            const isEveryIngredientsPresent = order.recipe.every(i =>
                                order.ingredients.includes(i)
                            );
                            if (isEveryIngredientsPresent)
                                return { ...order, position: 'finish' };
                            else return order;
                        default:
                            return order;
                    }
                } else {
                    return order;
                }
            });

        case MOVE_ORDER_BACK:
            return state.map(order => {
                if (order.id === action.payload) {
                    switch (order.position) {
                        case 'conveyor_2':
                            return { ...order, position: 'conveyor_1' };
                        case 'conveyor_3':
                            return { ...order, position: 'conveyor_2' };
                        case 'conveyor_4':
                            return { ...order, position: 'conveyor_3' };
                        default:
                            return order;
                    }
                } else {
                    return order;
                }
            });

        case ADD_INGREDIENT:
            if (state === []) return state;
            currentOrder = state.find(order => order.position === payload.from);
            if (!currentOrder) return state;
            index = state.findIndex(order => order.id === currentOrder.id);
            if (currentOrder.recipe.includes(payload.ingredient)) {
                if (!currentOrder.ingredients.includes(payload.ingredient)) {
                    currentOrder = {
                        ...currentOrder,
                        ingredients: [...currentOrder.ingredients, payload.ingredient]
                    };
                }
            }
            return state.map((order, key) => (key === index ? currentOrder : order));
        default:
            return state;
    }
};

export const getOrdersFor = (state, position) =>
    state.orders.filter(order => order.position === position);


