import { Modal } from "./Modal";
import { useToggle } from "./hooks/useToggleModal";

export const ComponentA = () => {
  const { isModalOpen, toggle } = useToggle();

  return (
    <>
      <button onClick={toggle}>Open modal A</button>
      {isModalOpen && (
        <Modal onClose={toggle}>
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur, id.
          </h1>
          <button type="button" onClick={toggle}>
            Close modal A
          </button>
        </Modal>
      )}
    </>
  );
};

// export class ComponentAOld extends Component {
//   state = {
//     isModalOpen: false,
//   };

//   toggle = () => {
//     this.setState(prev => ({ isModalOpen: !prev.isModalOpen }));
//   };

//   render() {
//     const { isModalOpen } = this.state;

//     return (
//       <>
//         <button onClick={this.toggle}>Open modal A</button>
//         {isModalOpen && (
//           <Modal onClose={this.toggle}>
//             <h1>
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//               Consequatur, id.
//             </h1>
//             <button type="button" onClick={this.toggle}>
//               Close modal A
//             </button>
//           </Modal>
//         )}
//       </>
//     );
//   }
// }
