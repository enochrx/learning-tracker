import React, { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = "http://localhost:8000";

const TopicContext = createContext();

const initialState = {
  topics: [],
  isLoading: false,
  currentTopic: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "topics/loaded":
      return {
        ...state,
        topics: action.payload,
        isLoading: false,
      };
    case "topic/loaded":
      return {
        ...state,
        isLoading: false,
        currentTopic: action.payload,
      };
    case "topic/created":
      return {
        ...state,
        isLoading: false,
        topics: [...state.topics, action.payload],
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error("Unknown action type");
  }
}

const TopicProvider = ({ children }) => {
  const [{ topics, isLoading, currentTopic, error }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  useEffect(function () {
    async function fetchTopics() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`${BASE_URL}/topics`);
        const data = await res.json();
        console.log(data);
        dispatch({
          type: "topics/loaded",
          payload: data,
        });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading topics",
        });
      }
    }
    fetchTopics();
  }, []);

  async function createTopic(newTopic) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${BASE_URL}/topics`, {
        method: "POST",
        body: JSON.stringify(newTopic),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      dispatch({
        type: "topic/created",
        payload: data,
      });
    } catch {
      dispatch({ type: "error", payload: "Error creating topic" });
    }
  }

  return (
    <TopicContext.Provider
      value={{ topics, isLoading, currentTopic, error, createTopic }}
    >
      {children}
    </TopicContext.Provider>
  );
};

function useTopics() {
  const context = useContext(TopicContext);
  if (context === undefined) {
    throw new Error("TopicContext was used outside of the TopicProvider");
  }
  return context;
}

export { TopicProvider, useTopics };
