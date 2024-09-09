import { createContext, useState } from "react";
import run from "../confiq/gemini";
export const contex = createContext();

const ContextProvider = ({ children }) => {
  const [Input, setInput] = useState("");
  const [RecentPromt, setRecentPromt] = useState("");
  const [PreviousPromt, setPreviousPromt] = useState([]);
  const [Result, setResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ResultData, setResultData] = useState("");

  const delaypara = (index, nextword) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextword);
    }, 70 * index);
  };
  const newchat = () => {
    setLoading(false);
    setResult(false);
  };
  const onSend = async (prompt) => {
    setResultData("");
    setLoading(true);
    setResult(true);

    if (!PreviousPromt.includes(prompt)) {
      setPreviousPromt((prev) => [...prev, prompt]);
      setRecentPromt(prompt);
    } else {
      setRecentPromt(prompt);
    }

    const newPrompt = prompt !== undefined ? prompt : Input;
    let response;

    try {
      response = await run(newPrompt);
      setInput("");
      setLoading(false);

      let newResponse = "";
      let responseArray = response.split("**");
      for (let i = 0; i < responseArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newResponse += responseArray[i];
        } else {
          newResponse += `<b>${responseArray[i]}</b>`;
        }
      }

      let newResponse2 = newResponse.split("*").join("<br/>");

      let newArrayResponse = newResponse2.split(" ");
      for (let i = 0; i < newArrayResponse.length; i++) {
        const nextWord = newArrayResponse[i];
        delaypara(i, nextWord + " ");
      }
    } catch (error) {
      console.error("Error fetching response:", error);
      setLoading(false);
    }
    setLoading(false);
    setInput("");
  };

  const ContextValue = {
    PreviousPromt,
    setPreviousPromt,
    onSend,
    setRecentPromt,
    RecentPromt,
    Result,
    loading,
    ResultData,
    Input,
    setInput,
    newchat,
  };

  return <contex.Provider value={ContextValue}>{children}</contex.Provider>;
};

export default ContextProvider;
