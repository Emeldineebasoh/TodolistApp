import React, { useEffect, useState } from "react";
import SingleTaskList from "../Compounents/SingleTaskList";
import { BE_addTaskList, BE_getTaskList } from "../Backend/Queries";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";

type Props = {};

function ListPage({}: Props) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const taskList = useSelector(
    (state: RootState) => state.TaskList.currentTaskList
  );

  useEffect(() => {
    BE_getTaskList(dispatch, setLoading);
  }, [dispatch]);

  return (
    <div className="p-10">
      <div className="flex flex-wrap  justify-center gap-10">
        {taskList.map((t) => (
          <SingleTaskList singleTaskList={t} />
        ))}

        {/* <singleTaskList />
        <singleTaskList />
        <SingleTaskList /> */}
      </div>
    </div>
  );
}

export default ListPage;
