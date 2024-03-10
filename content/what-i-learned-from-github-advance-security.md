---
title="What I Learned from Github Advance Security"
slug="what-i-learned-from-github-advance-security"
excerpt="GHAS includes various tools such as secret scanning, code scanning, and dependency management"
tags=["exam", "software"]
type="post"
publish_at="10 Mar 2024 10:40 IST"
featured_image="https://dars-portfolio.s3.us-west-2.amazonaws.com/Images/code+scanning.jpg"
---



## Introduction to GitHub Advanced Security

GitHub Advanced Security (GHAS) is a comprehensive suite of security features provided by GitHub to help developers and organisations identify and address security vulnerabilities in their code.

1. ### Secret Scanning

2. ### Code Scanning

3. ### Dependency Management

## My Experience

Unintentional exposure of API keys, tokens, and other sensitive information jeopardizes security, tarnishes reputations, and opens the door to immense legal repercussions. In the first two months alone of 2024, GitHub identified over 1 million leaked secrets across public repositories - equating to more than a dozen accidental breaches per minute.

Since August of last year, GitHub cloud users could voluntarily enable secret scanning push protection which automatically blocks commits containing detected secrets. Now, GitHub has made secret scanning push protection the default for all pushes to public repositories.

<div align="center">
	<img src="https://dars-portfolio.s3.us-west-2.amazonaws.com/Images/code+scanning.jpg" height="300px"/>
</div>

## What advantages does this change provide?

Exposed secrets can jeopardize our standing, finances, and potentially lead to legal ramifications. As GitHub advocates for the open source community, they believe public repositories – and our reputation as a developer – also deserves the protection.

Even with push protection enabled, we retain the capability to bypass the restriction. While it's not recommended, we have the option to fully turn off push protection via our user security settings. Nevertheless, given that we always have the means to circumvent the blockade, GitHub recommends keeping push protection active and only making exceptions when absolutely required.

## Private Repositories

If your organization opt for the GitHub Enterprise plan, you gain the ability to integrate GitHub Advanced Security, which also safeguards private repositories against the leakage of secrets. This enhancement provides you with the full array of secret scanning tools, alongside code scanning, AI-powered automatic code correction recommendations, and additional static application security testing (SAST) functionalities, together creating a robust DevSecOps platform solution.
<div align="center">
	<img src="https://dars-portfolio.s3.us-west-2.amazonaws.com/Images/secret-scanning.jpg" height="300px"/>
</div>

#### Learn more about secret scanning[](https://github.blog/2024-02-29-keeping-secrets-out-of-public-repositories/?utm_source=tldrsec.com&utm_medium=newsletter&utm_campaign=tl-dr-sec-221-hacking-google-ai-for-50k-detecting-secrets-in-videos-securing-medicare-medicaid#learn-more-about-secret-scanning)

GitHub's secret scanning capability safeguards over 200 varieties of tokens and patterns originating from more than 180 service providers, boasting industry-leading accuracy and a notably minimal occurrence of false positives, GitHub can collectively ensure that sensitive data is not accidentally disclosed in public repositories.

[Learn More About Secret Scanning](https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning)
[Push Protection for Users](https://docs.github.com/en/enterprise-cloud@latest/code-security/secret-scanning/push-protection-for-users)

## Protection

Luckily GitHub offers GHAS Github Advance Security certificiation and training material is available free. Learn how to secure your code with advanced security features at every stage of your development lifecycle. GitHub Advanced Security is an add-on to GitHub Enterprise that allows us to use security features, such as secret scanning, code scanning, and dependency management on your private repositories.
[Read about GHAS](https://learn.microsoft.com/en-us/collections/rqymc6yw8q5rey)

## Case Study

### Case Analysis: Codecov Incident (2021)

**Incident:** An exploitable flaw in Codecov's Docker image (a widely-used code coverage tool) permitted cyber intruders to pilfer hardcoded secrets from customer source code.

**Impact:**
1. Notable corporations such as Twilio, HashiCorp, and GoDaddy were compromised, leading to the leakage of their API keys and sensitive information.
2. Unauthorized Data Access: For several months, the attackers had the capability to siphon off confidential customer information until the breach was uncovered.
3. Enduring Consequences: This event tarnished Codecov's standing and had a profound effect on its operations. The incident also led to security lapses for the affected firms, necessitating extensive and expensive corrective actions.


Luckily, GitHub provides a certification for Advance Security which organisations should train their developers or developers should themselve be proactive to pursue such exams which will equip them with knowledge of different tools like, depandabot, code scanning, codeql etc. 

I have recently passed this examination and would advise the reader to do the same.
[GHAS Certificate](https://www.credly.com/badges/f881faff-5d2a-4e4c-a476-dffe9ad6c289/public_url) 

To learn more about GitHub Advanced Security and its features, you can visit the [GitHub Advanced Security documentation](https://docs.github.com/en/code-security/advanced-security).


> References:
1.  _A Comparative Study of Software Secrets Reporting by Secret Detection Tools_, Setu Kumar Basak et al., North Carolina State University, 2023. (https://arxiv.org/pdf/2307.00714.pdf)



