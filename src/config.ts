const config = {
    port: process.env.PORT || 3000,
    db: 'posgresql://postgres:admin001@localhost:5432/payroll_test',
    SECRET_TOKEN: 'payrolltesttoken'
};

export default config;