import {fail, danger, warn} from 'danger'

  
// No PR is too small to include a description of why you made a change
if (danger.github.pr.body.length < 10) {
  warn('Please include a description of your PR changes.');
}

if (!danger.github.pr.assignee) {
  fail("This pull request needs an assignee, and optionally include any reviewers.")
}  
