import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const environment = core.getInput('environment')
    console.log(`The input is: ${environment}`)
    core.debug(`Debug-text: The input is: ${environment}`)
    const outputValue = 'TestingValue'
    core.setOutput('outputResult', outputValue)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
