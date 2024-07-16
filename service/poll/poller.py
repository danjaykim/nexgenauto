import django
import os
import sys
import time
import traceback
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()

from service_rest.models import AutomobileVO


def get_automobiles():
    response = requests.get("http://inventory-api:8000/api/automobiles/")
    content = json.loads(response.content)
    for item in content["autos"]:
        AutomobileVO.objects.update_or_create(
            import_href=item["href"],
            defaults={"vin": item["vin"], "sold": item["sold"]},
        )


def poll():
    while True:
        print("Service poller polling for data")
        try:
            get_automobiles()
        except Exception as e:
            traceback.print_exc()
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
