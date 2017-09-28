module.exports = {
    bondingManager: {
        numActiveTranscoders: 1,
        unbondingPeriod: 2
    },
    jobsManager: {
        verificationRate: 1,
        jobEndingPeriod: 50,
        verificationPeriod: 50,
        slashingPeriod: 50,
        failedVerificationSlashAmount: 20,
        missedVerificationSlashAmount: 30,
        finderFee: 4
    },
    roundsManager: {
        blockTime: 1,
        roundLength: 50
    },
    faucet: {
        faucetAmount: 100000000000000000000,
        requestAmount: 1000,
        requestWait: 2,
        whitelist: []
    },
    minter: {
        initialTokenSupply: 10000000 * Math.pow(10, 18),
        yearlyInflation: 26
    },
    verifier: {
        verificationCodeHash: "QmPu23REr93Mfv7m9NPdFLMZz7PzHE1LaXvn4AmQCQgR3u"
    }
}