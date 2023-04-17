import { Octokit } from "octokit";
const octokit = new Octokit({
    auth: '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'
});
 const result= await octokit.request('GET /users/{username}/following{?per_page,page}', {
    username: 'USERNAME'
 })
  
 console.log(result)