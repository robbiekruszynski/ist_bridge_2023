import { useTheme } from '@mui/material/styles';
import { lightBlue, indigo, blue, brown, red, grey, blueGrey } from '@mui/material/colors';

import zkSyncEraIcon from 'assets/images/icons/zkSyncEra.png';
import zkSyncLiteIcon from 'assets/images/icons/zkSyncLite.png';
import ArbitrumIcon from 'assets/images/icons/Arbitrum.svg';
// import PolygonIcon from 'assets/images/icons/Polygonzkevm.png';
import ScrollIcon from 'assets/images/icons/Scroll.png';
import StarknetIcon from 'assets/images/icons/Starknet.png';
import LineaIcon from 'assets/images/icons/Linea.png';
import MantleIcon from 'assets/images/icons/Mantle.png';
import PolygonIcon from 'assets/images/icons/Polygon.svg';
import OptimismIcon from 'assets/images/icons/Optimism.svg';


export const Networks = () => {

    const theme = useTheme();

    const NetworkDetails = {
        zksyncera: {
            icon: zkSyncEraIcon,
            networkId: "",
            label: "zkSync Era",
            colors: {
                section: {
                    primary: blue[600],
                    primaryDark: blue[800],
                },
                text: {
                    primary: "#ffffff",
                    primaryLight: blue[200],
                }
            }
        },
        zksynclite: {
            icon: zkSyncLiteIcon,
            networkId: "",
            label: "zkSync Lite",
            colors: {
                section: {
                    primary: lightBlue[600],
                    primaryDark: lightBlue[800],
                },
                text: {
                    primary: "#ffffff",
                    primaryLight: lightBlue[200],
                }
            }
        },
        arbitrum: {
            icon: ArbitrumIcon,
            networkId: "",
            label: "Arbitrum",
            colors: {
                section: {
                    primary: indigo[600],
                    primaryDark: indigo[800],
                },
                text: {
                    primary: "#ffffff",
                    primaryLight: indigo[200],
                }
            }
        },
        scroll: {
            icon: ScrollIcon,
            networkId: "",
            label: "Scroll",
            colors: {
                section: {
                    primary: brown[600],
                    primaryDark: brown[800],
                },
                text: {
                    primary: "#ffffff",
                    primaryLight: brown[200],
                }
            }
        },
        starknet: {
            icon: StarknetIcon,
            networkId: "",
            label: "StarkNet",
            colors: {
                section: {
                    primary: blueGrey[600],
                    primaryDark: blueGrey[800],
                },
                text: {
                    primary: "#ffffff",
                    primaryLight: blueGrey[200],
                }
            }
        },
        linea: {
            icon: LineaIcon,
            networkId: "",
            label: "Linea",
            colors: {
                section: {
                    primary: grey[600],
                    primaryDark: grey[800],
                },
                text: {
                    primary: "#ffffff",
                    primaryLight: grey[200],
                }
            }
        },
        mantle: {
            icon: MantleIcon,
            networkId: "",
            label: "Mantle",
            colors: {
                section: {
                    primary: grey[700],
                    primaryDark: grey[900],
                },
                text: {
                    primary: "#ffffff",
                    primaryLight: grey[300],
                }
            }
        },
        polygonzkevm: {
            icon: PolygonIcon,
            networkId: "",
            label: "Polygon zkEVM",
            colors: {
                section: {
                    primary: theme.palette.secondary.dark,
                    primaryDark: theme.palette.secondary[800],
                },
                text: {
                    primary: "#ffffff",
                    primaryLight: theme.palette.secondary[200],
                }
            }
        },
        optimism: {
            icon: OptimismIcon,
            networkId: "",
            label: "Optimism",
            colors: {
                section: {
                    primary: red[700],
                    primaryDark: red[900],
                },
                text: {
                    primary: "#ffffff",
                    primaryLight: red[300],
                }
            }
        },
        
    }
    return NetworkDetails;
};