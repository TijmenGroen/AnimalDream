import { useEffect, useState } from "react";
import "../css/modalBox.css";

function ModalBox(props: { header: string; body: JSX.Element, show: boolean, showFunction: any}): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/typedef
  const [modalBoxDisplay, setModalBoxDisplay] = useState(false);

  useEffect(() => {
    setModalBoxDisplay(props.show)
  }, [props.show]);

  return (
    <>
      {modalBoxDisplay && (
        <div className="modalFull">
          <div className="modalBox">
            <div className="modalBoxInner">
              <div className="modalHeader">
                <div>{props.header}</div>
                <div
                  onClick={props.showFunction}
                >
                  X
                </div>
              </div>
              <hr />
              <div className="modalBody">{props.body}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalBox;
