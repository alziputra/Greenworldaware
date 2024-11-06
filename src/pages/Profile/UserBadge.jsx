import { Tooltip } from 'flowbite-react';
import PropTypes from 'prop-types';

export const UserBadge = (props) => {
  const { userById } = props;
  if (userById.points >= 100 && userById.points < 200) {
    return (
      <Tooltip content="Badge bronze">
        <img src="https://i.imgur.com/rK98cnX.png" alt="badge-bronze" />
      </Tooltip>
    );
  } else if (userById.points >= 200 && userById.points < 300) {
    return (
      <Tooltip content="Badge silver">
        <img src="https://i.imgur.com/b216CFN.png" alt="badge-silver" />
      </Tooltip>
    );
  } else if (userById.points >= 300) {
    return (
      <Tooltip content="Badge gold">
        <img src="https://i.imgur.com/9tTJXjC.png" alt="badge-gold" />
      </Tooltip>
    );
  } else {
    return;
  }
};

UserBadge.propTypes = {
  userById: PropTypes.object,
};
