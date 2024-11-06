import { Progress } from 'flowbite-react';
import PropTypes from 'prop-types';

export const UserPoints = (props) => {
  const { userById } = props;

  if (userById.points < 100) {
    return (
      <div className="flex flex-col">
        <Progress progress={userById.points ? userById.points : 0} color="green" />
        <div className="flex justify-between">
          <p>{userById.points}</p>
          <p>100</p>
        </div>
      </div>
    );
  } else if (userById.points < 200) {
    return (
      <div className="flex flex-col">
        <Progress progress={userById.points / 10} color="green" />
        <div className="flex justify-between">
          <p>{userById.points}</p>
          <p>200</p>
        </div>
      </div>
    );
  } else if (userById.points < 300) {
    return (
      <div className="flex flex-col">
        <Progress progress={userById.points == 200 ? 0 : userById.points / 10} color="green" />
        <div className="flex justify-between">
          <p>{userById.points}</p>
          <p>300</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col">
        <Progress progress={userById.points} color="green" />
        <div className="flex justify-between">
          <p>{userById.points}</p>
          <p>Level max</p>
        </div>
      </div>
    );
  }
};

UserPoints.propTypes = {
  userById: PropTypes.object,
};
