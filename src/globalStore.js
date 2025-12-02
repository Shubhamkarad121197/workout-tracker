// globalStore.js


let state={
    workOuts:[]
}

let subscribers=[];

// Read global state

export const getState=()=>state;

// Update store and notify
export const addWorkout=(workout)=>{
    state={...state,workouts:[...state.workouts,workout]}
    notifySubscribers()
}

// Subscription — auto re-render UI
export const subscribe = (callback) => {
  subscribers.push(callback);
};

const notifySubscribers = () => {
  subscribers.forEach(cb => cb());
};

