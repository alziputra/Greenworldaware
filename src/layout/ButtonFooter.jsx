import PropTypes from 'prop-types';
import { useReducer } from 'react';

const ButtonFooter = ({ property1, text }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || 'normal',
  });

  return (
    <div
      className={`items-start gap-[6px] relative cursor-pointer ${state.property1 === 'normal' ? 'w-[100px]' : ''} ${state.property1 === 'hover' ? 'inline-flex' : 'flex'}`}
      onMouseEnter={() => {
        dispatch('mouse_enter');
      }}
      onMouseLeave={() => {
        dispatch('mouse_leave');
      }}
      onClick={() => {
        dispatch('click');
      }}
    >
      <div
        className={`mt-[-1.00px] tracking-[0] text-[13px]  leading-[19.5px] relative ${state.property1 === 'hover' ? "[font-family:'Inter-Bold',Helvetica]" : "[font-family:'Inter-Regular',Helvetica]"} ${
          state.property1 === 'hover' ? 'w-[100px]' : 'w-fit'
        } ${state.property1 === 'hover' ? 'text-white' : 'text-[#ffffff]'} ${state.property1 === 'hover' ? 'font-bold' : 'font-normal'} ${state.property1 === 'normal' ? 'whitespace-nowrap' : ''}`}
      >
        {text}
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case 'click':
      return {
        ...state,
        property1: 'hover',
      };

    case 'mouse_enter':
      return {
        ...state,
        property1: 'hover',
      };

    case 'mouse_leave':
      return {
        ...state,
        property1: 'normal',
      };
  }

  return state;
}

ButtonFooter.propTypes = {
  property1: PropTypes.oneOf(['hover', 'normal']),
  text: PropTypes.string.isRequired,
};

export default ButtonFooter;
