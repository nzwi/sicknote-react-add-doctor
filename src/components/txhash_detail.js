/*
* Title: React App to add a new doctor onto the blockchain
* Comment: Response page to display transaction hash
* Version: 00_01
* Author: Nzwisisa Chidembo <nzwisisa@gmail.com>
*/

import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton';

const TxhashDetail = ({ data }) => {

  const stylePaper = {
    height: 100,
    width: 305,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  };

  const style = {
    margin: 0,
  };

  const url = `https://ropsten.etherscan.io/tx/${data.txhash}`;

  return (
    <div>
      <br />
      <div>
        <Paper style={stylePaper} zDepth={3}>
          <p>
            TxHash:
          </p>
          <p>
            {String(data.txhash).slice(0,20) + "..."}
          </p>
        </Paper>
      </div>
      <br />
      <Divider />
      <div>
          <RaisedButton label="View Transaction" primary={true} style={style} fullWidth={true} type="submit" href={url}/>
      </div>
    </div>
  );
};

export default TxhashDetail;
