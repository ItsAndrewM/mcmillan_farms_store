import { BaseModal, ModalCloseTarget } from "react-spring-modal";
import styles from "./sidebar.module.css";
import { useResponsiveValue } from "@theme-ui/match-media";
import Cross from "@/components/icons/cross";

const Sidebar = ({ children, open = false, onClose }) => {
  const width = useResponsiveValue(["100%", 500]);
  return (
    <BaseModal
      isOpen={open}
      onDismiss={onClose}
      contentProps={{
        style: {
          width,
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          transition: "transform .5s ease",
        },
      }}
      contentTransition={{
        from: { transform: "translateX(100%)" },
        enter: { transform: "translateX(0)" },
        leave: { transform: "translateX(100%)" },
      }}
    >
      <ModalCloseTarget>
        <div className={`${styles.close}`}>
          <Cross />
        </div>
      </ModalCloseTarget>
      {children}
    </BaseModal>
  );
};

export default Sidebar;
