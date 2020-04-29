import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle` 
main.detail_main {
    .country_wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
        background: ${({ theme }) => theme.body};

        .back_btn {
            padding: 40px 0 50px 0;

            button {
                cursor: pointer;
                background: ${({ theme }) => theme.accent};
                color: ${({ theme }) => theme.text};
                border: none;
                width: 105px;
                padding: 1em;

                a{
                    color: ${({ theme }) => theme.text};
                }
            }
        }

        .borders {
                button {
                    color: ${({ theme }) => theme.text};
                    background: ${({ theme }) => theme.accent};
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
                    border: none;
                    text-align: center;
                    border-radius: 3px;
                    width: 90px;
                    height: 32px;
                }
            }
        }
    }
    }
}`;