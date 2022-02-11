import React from 'react';
import './App.scss';

interface Props {
  onClick: () => void;
}

export const Provider: React.FC<Props> = React.memo(
  ({ onClick, children }) => (
    <button
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  ),
);

export const App: React.FC = () => {
  return (
    <div className="starter">
      <Provider onClick={() => ({})}>
        <label htmlFor="credit">
          <input
            inputMode="numeric"
            pattern="[0-9]*"
            type="text"
            name="credit"
          />
        </label>
      </Provider>
    </div>
  );
};
