import * as React from "react";
import { useQuery } from "react-query";

const fetchData = ({ queryKey }: { queryKey: Array<string> }) => {
  const [, owner, repo] = queryKey;

  return fetch(`https://api.github.com/repos/${owner}/${repo}/issues`, {
    headers: {
      Authorization: "",
    },
  }).then(async (response) => {
    // 如果请求返回status不为200 则抛出后端错误
    if (response.status !== 200) {
      const { message } = await response.json();
      throw new Error(message);
    }
    return response.json();
  });
};

export default function Bt() {
  const [inputOwner, setInputOwner] = React.useState("facebook");
  const [inputRepo, setInputRepo] = React.useState("react");
  const [queryKey, setQueryKey] = React.useState([inputOwner, inputRepo]);
  const issueQuery = useQuery(["issues", ...queryKey], fetchData);

  return (
    <div>
      <span>仓库：</span>
      <input
        name={"owner"}
        value={inputOwner}
        onChange={(e) => setInputOwner(e.target.value)}
      />
      /
      <input
        name={"repo"}
        value={inputRepo}
        onChange={(e) => setInputRepo(e.target.value)}
      />
      <button
        onClick={() => {
          setQueryKey([inputOwner, inputRepo]);
        }}
      >
        查看最新issue信息
      </button>
      <div>
        <h1>
          仓库{queryKey[0]}/{queryKey[1]}最新一条issue信息
        </h1>
        <p>
          {issueQuery.isLoading
            ? "加载中..."
            : issueQuery.isError
            ? issueQuery.status
            : JSON.stringify(issueQuery.data[0])}
        </p>
      </div>
    </div>
  );
}
