import React from "react";

export const List = (props) => {
  const { tasks, setTasks } = props;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return (
              <tr key={Math.random()}>
                <td>{task.title}</td>
                <td>{task.content}</td>
                <td>
                  <button
                    onClick={() => {
                      const nowaTabBezKliknietegoElementu = tasks.filter(
                        (ta) => {
                          return task.id !== ta.id;
                        }
                      );
                      setTasks(nowaTabBezKliknietegoElementu);
                    }}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
