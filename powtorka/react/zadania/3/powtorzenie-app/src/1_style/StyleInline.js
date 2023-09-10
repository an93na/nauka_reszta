import React from "react";

export const StyleInline = () => {
  const objectStyle = {
    color: "green",
    textAlign: "center",
    backgroundColor: "white",
    marginTop: 20,
    padding: 10,
    borderRadius: "5px",
  };
  return (
    <article>
      <h3 style={{ color: "red" }}>Style Inlinowe</h3>
      <p
        style={{
          color: "blue",
          textAlign: "center",
          backgroundColor: "bisque",
          marginTop: 20,
          padding: 10,
          borderRadius: "5px",
        }}
      >
        <b> Lorem,</b>ipsum dolor sit amet consectetur adipisicing elit. Quo
        ullam eius maxime animi molestias fugit laboriosam dicta nulla odio
        magnam, iusto voluptas. Possimus dicta excepturi laudantium vero omnis,
        obcaecati quo. Quo facere tempora dolores autem quod dolorum fuga
        repudiandae excepturi illo ducimus. Officiis sit blanditiis corrupti,
        voluptatibus id sed tempore amet eos saepe delectus ad earum doloribus,
        nobis dolorem odio? Excepturi, neque esse sint modi repudiandae
        reprehenderit porro! Omnis magnam dicta distinctio fugit sit deserunt
        culpa placeat corrupti! Voluptatum rem expedita porro corrupti
        aspernatur cupiditate deserunt eos ut aperiam cum. Quia alias, quidem
        vel iure dolores cupiditate id, commodi fugit, minima corporis harum
        vero. Vitae dolor at accusamus, repellat asperiores itaque deserunt
        similique nesciunt odio sequi fugit officia laudantium voluptate.
      </p>
      <p style={objectStyle}>
        <b>Lorem</b> ipsum dolor sit amet consectetur adipisicing elit.
        Excepturi, beatae alias blanditiis ex laborum deserunt officiis
        accusamus. Delectus, ratione autem. Fugit molestiae ab magnam rerum
        pariatur architecto veniam, cupiditate modi? Nobis autem vel sequi
        quisquam consequuntur, mollitia quia harum vitae facilis cumque,
        voluptates culpa distinctio! Deserunt fugiat asperiores consequatur id
        eius soluta fuga accusantium voluptatem dolorum. Vitae eum quas
        repellat! Minima officia repellendus tempora enim, dignissimos autem
        possimus aliquam est soluta incidunt vitae laboriosam consequuntur
        consequatur. Earum porro ratione, harum asperiores praesentium minima
        consectetur doloribus consequuntur fuga perspiciatis quas!
        Necessitatibus? Cumque officia perferendis minima laborum asperiores
        nulla consectetur ad veniam. A omnis repellat repudiandae nesciunt. Eius
        soluta vero tempore ratione vel, incidunt aspernatur consectetur optio
        velit ex repellendus provident laborum!
      </p>
    </article>
  );
};
