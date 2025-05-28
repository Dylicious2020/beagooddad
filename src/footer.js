import InstaLogo from "./instaLogo";

function Footer() {
    return (
        <div>
            <div style={{
            width: '100%',
            height: '200px',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexDirection: 'column'
          }}>
            <InstaLogo/>
            <h3 className='mailingList' style={{fontWeight: '100'}}>Join our mailing list</h3>
          </div>
          
        </div>
    );
}

export default Footer