export class OverrepResultsFakeDb {
  public static result =
    {
      "results": {
        "reference": {
          "organism": "Homo sapiens",
          "mapped_count": 1,
          "mapped_id": "Q4W5N1",
          "unmapped_count": 0
        },
        "input_list": {
          "organism": "Homo sapiens",
          "mapped_count": 1,
          "mapped_id": "Q96PB1",
          "unmapped_count": 0
        },
        "result": [
          {
            "number_in_list": 0,
            "fdr": 13,
            "expected": 1,
            "number_in_reference": 1,
            "pValue": 1,
            "term": {
              "id": "GO:0051234",
              "label": "establishment of localization"
            },
            "plus_minus": "-"
          },
          {
            "number_in_list": 0,
            "fdr": 6.5,
            "expected": 1,
            "number_in_reference": 1,
            "pValue": 1,
            "term": {
              "id": "GO:0071702",
              "label": "organic substance transport"
            },
            "plus_minus": "-"
          },
          {
            "number_in_list": 0,
            "fdr": 4.333333333333333,
            "expected": 1,
            "number_in_reference": 1,
            "pValue": 1,
            "term": {
              "id": "GO:0033036",
              "label": "macromolecule localization"
            },
            "plus_minus": "-"
          },
          {
            "number_in_list": 0,
            "fdr": 3.25,
            "expected": 1,
            "number_in_reference": 1,
            "pValue": 1,
            "term": {
              "id": "GO:0051179",
              "label": "localization"
            },
            "plus_minus": "-"
          },
          {
            "number_in_list": 0,
            "fdr": 2.6,
            "expected": 1,
            "number_in_reference": 1,
            "pValue": 1,
            "term": {
              "id": "GO:0006869",
              "label": "lipid transport"
            },
            "plus_minus": "-"
          },
          {
            "number_in_list": 0,
            "fdr": 2.1666666666666665,
            "expected": 1,
            "number_in_reference": 1,
            "pValue": 1,
            "term": {
              "id": "GO:0006810",
              "label": "transport"
            },
            "plus_minus": "-"
          },
          {
            "number_in_list": 0,
            "fdr": 1.8571428571428572,
            "expected": 1,
            "number_in_reference": 1,
            "pValue": 1,
            "term": {
              "id": "GO:0010876",
              "label": "lipid localization"
            },
            "plus_minus": "-"
          },
          {
            "number_in_list": 0,
            "fdr": 1.625,
            "expected": 1,
            "number_in_reference": 1,
            "pValue": 1,
            "term": {
              "id": "GO:0055085",
              "label": "transmembrane transport"
            },
            "plus_minus": "-"
          },
          {
            "number_in_list": 1,
            "fdr": 1.4444444444444444,
            "expected": 1,
            "number_in_reference": 1,
            "pValue": 1,
            "term": {
              "id": "GO:0008150",
              "label": "biological_process"
            },
            "plus_minus": ""
          }
        ],
        "search": {
          "search_type": "overrepresentation"
        },
        "tool_release_date": 20181010,
        "enrichment_test_type": "FISHER",
        "annotDataSet": "GO:0008150",
        "annot_version_release_date": "GO Ontology database  Released 2018-11-15",
        "correction": "FDR"
      }
    }
}