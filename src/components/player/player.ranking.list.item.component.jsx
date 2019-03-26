import React from 'react';

class PlayerRankingListItem extends React.Component {
  render() {
    return (
      <li className={'list-group-item d-flex justify-content-between align-items-center'}>
        <div>
          <span className="badge badge-success px-2">{this.props.rank}</span>
          <span className="pl-4 font-italic font-weight-bold">{this.props.playerName}</span>
        </div>
      </li>
    );
  }
};

export default PlayerRankingListItem;