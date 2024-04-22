const usehtmlContent = (content = "") => {
  const parse = new DOMParser();
  const doc = parse.parseFromString(content, "text/html");

  let dispaly = [];

  Array.from(doc.body.childNodes).forEach((node, index) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.tagName.toLowerCase() == "h1") {
        dispaly.push(
          <h1 key={index} className="text-3xl font-bold mb-4">
            {node.textContent}
          </h1>
        );
      } else if (node.tagName.toLowerCase() == "h2") {
        dispaly.push(
          <h2 key={index} className="text-2xl font-bold mb-3">
            {node.textContent}
          </h2>
        );
      } else if (node.tagName.toLowerCase() == "p") {
        dispaly.push(
          <p key={index} className="text-lg mb-3">
            {node.textContent}
          </p>
        );
      } else {
        dispaly.push(
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: node.outerHTML }}
          />
        );
      }
    } else if (node.nodeType === Node.TEXT_NODE) {
      dispaly.push(
        <p key={index} className="text-lg mb-3">
          {node.textContent}
        </p>
      );
    }
  });

  return [dispaly];
};


export default usehtmlContent;
