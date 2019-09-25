import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

export default function Loading (){
  return (
    <div style={style.container}>
      <RefreshIndicator
        size={50}
        left={10}
        top={50}
        status="loading"
        style={style.refresh}
      />
    </div>
  );
}
