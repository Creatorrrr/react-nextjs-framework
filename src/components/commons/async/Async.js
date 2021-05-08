import { useAsync } from "react-async";

export default function Async({ onSuccess, onError, onLoading, params, ...asyncParams }) {
  const { data, error, isLoading } = useAsync({ ...asyncParams, ...params });

  if (isLoading) return onLoading();
  if (error) return onError(error);
  if (data) return onSuccess(data);
  return null;
}
