import React from 'react';
import { feedback } from "../constants";

const FeedbackCard = () => {
  return (
    <div className="flex flex-wrap items-center justify-center feedback-container"> 
      {feedback.map((item) => (
        <div key={item.id} className="m-8 item sm:w-1/2 lg:w-1/3 xl:w-1/4">
          <div className="p-8 border rounded shadow">
            <h2 className="mb-2 font-bold text-white text-1xl">{item.title}</h2>
            <p className="text-red">{item.content}</p>
            <p className="mt-2 text-red">- {item.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedbackCard;
