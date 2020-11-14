import React, { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { User, UserRoles } from "../../types/user";
import { Button } from "../Button/Button.styled";
import Text from "../Typography/Text";
import {
  UserBlobContainer,
  UserBlobHeader,
  UserBlobHeaderTitle,
  UserBlobHeaderSide,
} from "./UserBlob.styled";

interface Props {
  user: User;
  onRoleChangeClick: (newRole: UserRoles, userId: string) => void;
}

const UserBlob: React.FC<Props> = ({ user, onRoleChangeClick }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);

  useClickOutside(menuRef, () => setShowMenu(false));

  return (
    <UserBlobContainer>
      <UserBlobHeader>
        <UserBlobHeaderTitle>
          <Text>{user.email}</Text>
          <Text light small>
            <span className="text-teal-700 font-bold">
              {user.role.toUpperCase()}
            </span>
          </Text>
        </UserBlobHeaderTitle>
        <UserBlobHeaderSide className="relative">
          <Button
            small
            secondary
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            type="button"
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
          >
            Zmień rolę
          </Button>

          {showMenu && (
            <div
              ref={menuRef}
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg z-30"
            >
              <div className="rounded-md bg-white shadow-xs">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {Object.values(UserRoles).map((role) => (
                    <a
                      key={role}
                      href="#"
                      onClick={() => {
                        onRoleChangeClick(role, user.id);
                      }}
                      className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                      role="menuitem"
                    >
                      {role.toUpperCase()}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </UserBlobHeaderSide>
      </UserBlobHeader>
    </UserBlobContainer>
  );
};

export default UserBlob;
