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
        <input type="text" pattern="[0-9]" />
      </Provider>
    </div>
  );
};
