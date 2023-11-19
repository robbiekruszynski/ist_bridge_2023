// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';

// material-ui
// import { ButtonBase, Typography } from '@mui/material';
import { Typography } from '@mui/material';

// project imports
// import config from 'config';
// import Logo from 'ui-component/Logo';
// import { MENU_OPEN } from 'store/actions';
import logo from 'assets/images/logo.png';
import nounsGlasses from 'assets/images/nouns.png';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  // const defaultId = useSelector((state) => state.customization.defaultId);
  // const dispatch = useDispatch();
  return (
    <span>
      <img src={logo} alt="SaferBridge" width="50" style={{marginRight: 10 + 'px',verticalAlign: 'middle'}} />
      {/* <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} component={Link} to={config.defaultPath}> */}
        {/* <Logo /> */}
        <Typography variant="h2" style={{display: 'inline-block',verticalAlign: 'middle'}}>
          SaferBridge
        </Typography>
      {/* </ButtonBase> */}
      <img src={nounsGlasses} alt="Nouns BS" width="20" style={{marginLeft: '-' + 15 + 'px',verticalAlign: 'middle'}} />
    </span>
  );
};

export default LogoSection;
