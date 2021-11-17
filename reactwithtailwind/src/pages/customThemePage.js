import React from "react";

const TailWindCssButton = (props) => {
  return (
    <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600">
      {props.children}
    </button>
  );
};

const CustomThemePage = () => {
  return (
    <div className="container p-10">
      {/* <div className="p-6 max-w-sm mx-auto bg-white rounded-xl my-10 shadow-md flex items-center space-x-4"> */}
      {/* <div className="flex-shrink-0">
        <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
      </div> */}
      {/* <div>
          <div className="text-xl font-medium text-primary">ChitChat</div>
          <p className="text-blue-450">You have a new message!</p>
        </div>
      </div> */}
      <TailWindCssButton>Testing Button</TailWindCssButton>
    </div>
  );
};

export default CustomThemePage;
