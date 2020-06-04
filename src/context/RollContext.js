import createDataContext from './createDataContext';

require("../../lib/swisscalc.lib.format.js");
require("../../lib/swisscalc.lib.operator.js");
require("../../lib/swisscalc.lib.operatorCache.js");
require("../../lib/swisscalc.lib.shuntingYard.js");
require("../../lib/swisscalc.display.numericDisplay.js");
require("../../lib/swisscalc.display.memoryDisplay.js");
require("../../lib/swisscalc.calc.calculator.js");

var oc = swisscalc.lib.operatorCache;
var calc = new swisscalc.calc.calculator();

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const rollReducer = (state, action) => {
    switch (action.type) {
        case 'ROLL':
            return { ...state, rolls: [...state.rolls, action.payload] };
        case 'SET_CUSTOM_ROLL':
            return { ...state, customRollText: [...state.customRollText, action.payload] };
        case 'REMOVE_CUSTOM_ROLL':
            return { ...state, customRollText: state.customRollText.pop() }
        case 'ROLL_CUSTOM':
            return { ...state, customRollTotal: action.payload, recentRolls: [ ...state.recentRolls, state.customRollText] };
        case 'CLEAR_CUSTOM_ROLL':
            return { ...state, customRollText: [] };
        default:
            return state;
    };
};

//simple roll action that takes a type of die, an amount(number of that die to roll), 
//a modifier, and a bonus, and returns an array of random numbers 
const roll = dispatch => {
    return (die, amount, mod, bonus) => {
        const results = [];
        var i;
        for (i = 0; i < amount; i++) {
            results.push(getRndInteger(1, die))
        }
        dispatch({ type: 'ROLL', payload: { die, amount, mod, bonus, results } });
    };
};

//setters for tracking custom roll text in the roll menu
//add a die to the custom roll
const addDie = dispatch => {
    return (die) => {
        const result = getRndInteger(1, die);
        calc.addDigit(result);
        dispatch({ type: 'SET_CUSTOM_ROLL', payload: `1d${die}` });
    };
};

//add a digit to the custom roll
const addDigit = dispatch => {
    return (digit) => {
        calc.addDigit(digit);
        dispatch({ type: 'SET_CUSTOM_ROLL', payload: digit });
    };
};

//add an open parentheses operator to the custom roll
const addOpenParen = dispatch => {
    return () => {
        calc.openParen();
        dispatch({ type: 'SET_CUSTOM_ROLL', payload: ' ( ' });
    };
};

//add a closed parentheses operator to the custom roll
const addClosedParen = dispatch => {
    return () => {
        calc.closeParen();
        dispatch({ type: 'SET_CUSTOM_ROLL', payload: ' )' });
    };
};

//add a division operator to the custom roll
const addDivide = dispatch => {
    return () => {
        calc.addBinaryOperator(oc.DivisionOperator);
        dispatch({ type: 'SET_CUSTOM_ROLL', payload: ' / ' });
    };
};

//add a multiplication operator to the custom roll
const addTimes = dispatch => {
    return () => {
        calc.addBinaryOperator(oc.MultiplicationOperator);
        dispatch({ type: 'SET_CUSTOM_ROLL', payload: ' X ' });
    };
};

//add a minus operator to the custom roll
const addMinus = dispatch => {
    return () => {
        calc.addBinaryOperator(oc.SubtractionOperator);
        dispatch({ type: 'SET_CUSTOM_ROLL', payload: ' - ' });
    };
};

//add an addition operator to the custom roll
const addPlus= dispatch => {
    return () => {
        calc.addBinaryOperator(oc.AdditionOperator);
        dispatch({ type: 'SET_CUSTOM_ROLL', payload: ' + ' });
    };
};

//remove last operator, digit, or die from the custom roll
const removeCustomRoll = dispatch => {
    return () => {
        const lastItem = state.customRollText.slice(-1)[0]
        console.log('last item: ', lastItem)
        console.log('last item length: ', lastItem.length)
        console.log('calc display before: ', calc.getMainDisplay())
        var i;
        for (i=0; i < lastItem.length; i++) {
            calc.backspace();
        }
        dispatch({ type: 'REMOVE_CUSTOM_ROLL' })
    };
};

//completely clear custom roll
const clearCustomRoll = dispatch => {
    return () => {
        calc.clear();
        dispatch({ type: 'CLEAR_CUSTOM_ROLL' })
    };
};

const rollCustom = dispatch => {
    return () => {
        calc.equalsPressed();
        const total = calc.getMainDisplay();
        dispatch({ type: 'SET_CUSTOM_ROLL', payload: ` = ${total}`})
        dispatch({ type: 'ROLL_CUSTOM', payload: total });
    };
};

export const { Context, Provider } = createDataContext(
    rollReducer,
    { 
        roll, 
        addDie, 
        addDigit, 
        addOpenParen,
        addClosedParen,
        addDivide,
        addTimes,
        addMinus,
        addPlus, 
        removeCustomRoll, 
        clearCustomRoll,
        rollCustom 
    },
    { 
        rolls: [{ results: [] }], 
        customRollText: [], 
        customRollTotal: '', 
        recentRolls: [], 
        savedRolls: [
            { title: 'Dagger attack with sneak attack', roll: '1d20 + 1d6 + 6' }, 
            { title: 'Ranged damage', roll: '2d8 + 1d6 + 5' }
        ] 
    }
);