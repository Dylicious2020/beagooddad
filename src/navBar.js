import {useState, useEffect, useRef} from 'react';

function NavBar(props) {

    const optionStyle = {
        fontWeight: '100',
        display: props.viewMode === 'mobile' ? 'none' : ''
    }

    return (
        <div>
            <div style={{
            display: 'flex',
            justifyContent: 'center',
            columnGap: props.viewMode === 'mobile' ? '0%' : '15%',
            backgroundColor: 'white',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <h3 className='option' style={optionStyle}>shop</h3>
                </div>
                
                <h1 style={{
                fontSize: props.viewMode === 'mobile' ? '55px' : '60px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
                letterSpacing: '-3px'
                }}>be a good dad 
                    <div style={{
                    width: props.viewMode === 'mobile' ? '5px' : '10px',
                    height: props.viewMode === 'mobile' ? '5px' : '10px',
                    backgroundColor: 'black',
                    marginBottom: '12px',
                    marginLeft: '2px'
                    }}>
                
                    </div>
                </h1>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <h3 className='option' style={optionStyle}>About us</h3>
                </div>
            </div>
            
        </div>
    )
}

export default NavBar