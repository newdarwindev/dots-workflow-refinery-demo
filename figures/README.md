# Eight vector diagrams

The eight numbered `*.tex` files are original, reusable TikZ figures. They use [PGF/TikZ](https://ctan.org/pkg/pgf) for vector drawing and [standalone](https://ctan.org/pkg/standalone) for one PDF per figure. `style.tex` keeps color, text, and line grammar consistent. Build each with Tectonic in this directory:

```sh
for source in 0*.tex; do tectonic "$source" --outdir pdf; done
```

The resulting PDFs are vector assets included by the white paper and Beamer deck. Solid teal boxes mean a bounded observed pattern or an explicitly stated owner premise; dashed amber boxes mean a proposed component. Diagrams use synthetic labels and abstract structure only. Private source notes are kept outside this public repository.
