# Beamer presentation generation

Source: `workflow-refinery.tex`. Output: `../public/resources/workflow-refinery-presentation.pdf`.

First run the [figure build](../figures/README.md) so the vector PDFs exist. Then run from this directory with an installed [Tectonic](https://tectonic-typesetting.github.io/):

```sh
tectonic workflow-refinery.tex --outdir ../public/resources
mv ../public/resources/workflow-refinery.pdf ../public/resources/workflow-refinery-presentation.pdf
```

The deck is an original synthetic concept explanation, not a record of measured outcomes.
