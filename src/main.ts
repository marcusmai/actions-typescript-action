import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const environment = core.getInput('environment')
    core.info(`The input is: ${environment}`)
    core.debug(`Debug-text: This is how a debug is shown`)
    core.warning('Warning-text: This is how a warning is shown')
    core.info('Info-text: This is how a info text is shown')
    const outputValue = 'TestingValue'
    core.setOutput('outputResult', outputValue)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
