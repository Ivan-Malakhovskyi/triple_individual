import { Modal } from "./Modal";
import { useToggle } from "./hooks/useToggleModal";

export const ComponentB = () => {
  const { isModalOpen, toggle } = useToggle(false);

  return (
    <>
      <button onClick={toggle}>Open modal B</button>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={toggle}>
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur, id.
          </h1>
          <button type="button" onClick={toggle}>
            Close modal B
          </button>
        </Modal>
      )}
    </>
  );
};

// export class ComponentBOld extends Component {
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
//         <button onClick={this.openModal}>Open modal B</button>

//         {isModalOpen && (
//           <Modal isOpen={isModalOpen} onClose={this.closeModal}>
//             <h1>
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//               Consequatur, id.
//             </h1>
//             <button type="button" onClick={this.closeModal}>
//               Close modal B
//             </button>
//           </Modal>
//         )}
//       </>
//     );
//   }
// }
