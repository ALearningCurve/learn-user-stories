/**
 * Class which represents a collection of static functions which can be used
 * to verify test results.
 */
export default class Assert {
    /**
     * Function which outputs to the console whether or not the test case passes
     * based on if the actual value equals the expected value.
     * @param {T} actual Actual value produced by tested functionality
     * @param {T} expected Expected value of test functionality
     * @param {string} testCaseName The name of the test case being run
     */
    static equal<T>(actual: T, expected: T, testCaseName: string): void {
        const passed = actual === expected;
        const testStatus = passed ? "passed" : "failed";
        console.log(`${testCaseName} ${testStatus}`);
    }

    /**
     * Function which outputs to console whether or not the test case passes
     * based on if an error was thrown by unsafe code.
     * @param {() => void} unsafeCode Function, which when invoked, should error
     * @param {string} testCaseName The name of the test case being run
     */
    static shouldError(unsafeCode: () => void, testCaseName: string): void {
        let caughtError = false;
        try {
            unsafeCode();
        } catch {
            caughtError = true;
        }
        // we want to catch error, so expect an error to have been caught
        Assert.equal(caughtError, true, testCaseName);
    }
}


