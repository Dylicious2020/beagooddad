import {useEffect, useState} from 'react';
import Chris from './assets/476620778_17862136701345124_5009046824002216109_n.jpg'

function Home(props) {

    return (
        <div>
        
          <div style={{
            width: '80%',
            height: '500px',
            marginLeft: '10%',
            position: 'relative',
            overflow: 'hidden',
            pointerEvents: 'none'
            // border: '1px solid black',
            // overflow: 'hidden'
          }}>
            <img src={Chris} style={{
                width: '80%',
                position: 'fixed',
                height: 'auto',
                zIndex: '-1',
                pointerEvents: 'none'
            }}></img>
            <div className='cover' style={{
                width: '100%',
                height: '40px',
                backgroundColor: 'white',
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                columnGap: '20%'
            }}>
              <h3 style={{fontWeight: '100', display: props.viewMode === 'mobile' ? '' : 'none'}}>Shop</h3>
              <h3 style={{fontWeight: '100', display: props.viewMode === 'mobile' ? '' : 'none'}}>About us</h3>
            </div>
          </div>
          
          

          
          </div>
    )
}

export default Home