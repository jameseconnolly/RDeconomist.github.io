var chartUK17 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "title": {
    "text": "CASE POSITIVITY - ROLLING RATE",
    "anchor": "middle",
    "color": "black"
  },
  "description": "Coronavirus cases",
  "data": {
    "url": "https://api.coronavirus.data.gov.uk/v2/data?areaType=region&metric=uniqueCasePositivityBySpecimenDateRollingSum&format=csv",
    "format": {"type": "csv"}
  },
  "height": 400,
  "width": "container",
  "config": {"background": "#FcFdFd"},
  "mark": {"type": "line", "point": false},
  "selection": {
    "region": {"type": "multi", "fields": ["areaName"], "bind": "legend"}
  },
  "transform": [
    {
      "filter": {
        "field": "date",
        "range": [
          {"year": 2020, "month": "sep", "date": 1},
          {"year": 2050, "month": "dec", "date": 30}
        ]
      }
    }
  ],
  "encoding": {
    "x": {
      "field": "date",
      "type": "temporal",
      "title": "Date",
      "axis": {"grid": false}
    },
    "y": {
      "field": "uniqueCasePositivityBySpecimenDateRollingSum",
      "type": "quantitative",
      "title": "Positivity rate (%)",
      "axis": {"grid": false}
    },
    "color": {
      "field": "areaName",
      "type": "nominal",
      "scale": {"scheme": "set1"},
      "title": "Region",
      "legend": {"orient": "top-left", "fillColor": "#FcFdFd"}
    },
    "opacity": {"condition": {"selection": "region", "value": 1}, "value": 0.1},
    "tooltip": [
      {"field": "date", "type": "temporal", "title": "Date"},
      {"field": "areaName", "type": "nominal", "title": "Region"},
      {
        "field": "uniqueCasePositivityBySpecimenDateRollingSum",
        "type": "nominal",
        "title": "Positivity rate",
        "format": ".0f"
      }
    ]
  }
}
;

vegaEmbed('#visUK17', chartUK17);
