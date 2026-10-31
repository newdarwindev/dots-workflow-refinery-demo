# White paper generation

Source: `workflow-refinery.tex`. Output: `../public/resources/workflow-refinery-white-paper.pdf`.

Run from this directory with an installed [Tectonic](https://tectonic-typesetting.github.io/):

```sh
tectonic workflow-refinery.tex --outdir ../public/resources
mv ../public/resources/workflow-refinery.pdf ../public/resources/workflow-refinery-white-paper.pdf
```

The committed PDF is a generated, versioned public artifact. It uses only synthetic examples and contains no empirical results. `pdfinfo` and `pdftoppm` can inspect the output.
