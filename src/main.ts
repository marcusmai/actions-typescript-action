import * as core from '@actions/core'

async function run(): Promise<void> {
  const environment = core.getInput('environment')
  console.log(`The input is: ${environment}`)
}

run()
