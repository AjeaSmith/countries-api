import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
}

body {
    background: ${({ theme }) => theme.body}
    height: 100%;

    color: ${({ theme }) => theme.text};

    .dark {
        --accent-color: #2b3845;
        --background-color: #202c36;
        --text-color: #ffffff;
        background: ${({ theme }) => theme.body}
        color: ${({ theme }) => theme.text};
    }
}

header {
    background: ${({ theme }) => theme.accent};
}

main {
    height: 100%;

    .main_wrapper {
        height: 100%;
        background: ${({ theme }) => theme.body};
        padding: 0 30px;

        .form_filter {
            form {
                .searchbox {
                    color: ${({ theme }) => theme.text};
                    display: flex;
                    background: ${({ theme }) => theme.accent};
                    padding: 1.5em;
                    border-radius: 3px;
                    width: 100%;
    
                    input {
                        background: ${({ theme }) => theme.accent};
                        color: ${({ theme }) => theme.text};
                        width: 375px;
                        font-size: 0.8em;
                        border: none;
                        outline: none;
                        ::placeholder {
                        color: ${({ theme }) => theme.text};
                        }
                    }

                    i {
                        margin-right: 20px;
                        color: ${({ theme }) => theme.text};
                    }
                }
            }

            .dropdown {
                position: relative;

                button {
                    color: ${({ theme }) => theme.text};
                    border: none;
                    font-size: 0.8em;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: ${({ theme }) => theme.accent};
                    padding: 23px 23px 23px 30px;
                    border-radius: 3px;
                    width: 255px;
                    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                    -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                    cursor: pointer;
                    margin-bottom: 38px;
                }

                .dropdown_content {
                    color: ${({ theme }) => theme.text};
                    flex-direction: column;
                    font-size: 0.8em;
                    border-radius: 5px;
                    padding: 23px 23px 23px 30px;
                    width: 255px;
                     box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                    background:${({ theme }) => theme.accent};
                }
            }
        }

        .countries_wrapper {
            .country {
                background: ${({ theme }) => theme.accent};
            }
        }
    }
}`